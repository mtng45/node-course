
# [mongoose docs](https://mongoosejs.com/docs/guide.html)

## [Schematypes](https://mongoosejs.com/docs/schematypes.html#schematypes)
SchemaTypesは、パスの defaults, validation, getters, setters, field selection, クエリのフィールド選択のdefaults、およびMongooseドキュメントプロパティのその他の一般的な特性の定義を処理します。

### What is a SchemaType?
Mongooseスキーマは、Mongooseモデルの構成オブジェクトと考えることができます。 SchemaTypeは、個々のプロパティの構成オブジェクトになります。 SchemaTypeは、特定のパスにどのタイプが必要か、ゲッター/セッターがあるかどうか、そのパスに有効な値を示します。

```javascript
const schema = new Schema({ name: String });
schema.path('name') instanceof mongoose.SchemaType; // true
schema.path('name') instanceof mongoose.Schema.Types.String; // true
schema.path('name').instance; // 'String'
```

SchemaTypeはタイプとは異なります。つまり、mongoose.ObjectId！== mongoose.Types.ObjectIdです。 SchemaTypeは、Mongooseの単なる構成オブジェクトです。 mongoose.ObjectId SchemaTypeのインスタンスは、実際にはMongoDB ObjectIdを作成するのではなく、スキーマ内のパスの構成にすぎません。

...

### [SchemaType Options](https://mongoosejs.com/docs/schematypes.html#schematype-options)
型を直接使用してスキーマ型を宣言することも、型プロパティを持つオブジェクトを宣言することもできます。
```javascript
var schema1 = new Schema({
  test: String // `test` is a path of type String
});

var schema2 = new Schema({
  // The `test` object contains the "SchemaType options"
  test: { type: String } // `test` is a path of type string
});
```

typeプロパティに加えて、パスに追加のプロパティを指定できます。たとえば、保存する前に文字列を小文字にしたい場合：

```javascript
var schema2 = new Schema({
  test: {
    type: String,
    lowercase: true // Always convert `test` to lowercase
  }
});
```
任意のプロパティをSchemaTypeオプションに追加できます。多くのプラグインは、カスタムSchemaTypeオプションに依存しています。たとえば、schegoTypeオプションで `autopopulate: true` を設定すると、mongoose-autopopulateプラグインは自動的にパスを設定します。 Mongooseには、上記の例の `lowercase` など、組み込みのSchemaTypeオプションがサポートされています。

`lowercase` オプションは、文字列に対してのみ機能します。すべてのスキーマタイプに適用される特定のオプションと、特定のスキーマタイプに適用されるオプションがあります。

#### All Schema Types
- `required`: boolean or function, if true adds a required validator for this property
- `default`: Any or function, sets a default value for the path. If the value is a function, the return value of the function is used as the default.
- `select`: boolean, specifies default projections for queries
- `validate`: function, adds a validator function for this property
- `get`: function, defines a custom getter for this property using `Object.defineProperty()`.
- `set`: function, defines a custom setter for this property using `Object.defineProperty()`.
- `alias`: string, mongoose >= 4.10.0 only. Defines a virtual with the given name that gets/sets this path.

...

#### String
- `lowercase`: boolean, whether to always call .toLowerCase() on the value
- `uppercase`: boolean, whether to always call .toUpperCase() on the value
- `trim`: boolean, whether to always call .trim() on the value
- `match`: RegExp, creates a validator that checks if the value matches the given regular expression
- `enum`: Array. 値が指定された配列内にあるかどうかを確認するバリデーターを作成します。
- `minlength`: Number, creates a validator that checks if the value length is not less than the given number
- `maxlength`: Number, creates a validator that checks if the value length is not greater than the given number

...

---

## [Validation](https://mongoosejs.com/docs/validation.html#validation)
Validation 構文の詳細に入る前に、次の規則に留意してください。
- Validation は SchemaType で定義されます
- Validation is middleware.Mongoose は、デフォルトですべてのスキーマで `pre('save')` フックとして validation を登録します。
- You can manually run validation using `doc.validate(callback)` or `doc.validateSync()`
- Validators は未定義の値に対して実行されません。唯一の例外は、 `required` validator です。
- Validation は非同期的に再帰的です。 Model＃save を呼び出すと、サブドキュメントの Validation も実行されます。エラーが発生した場合、Model＃save コールバックはそれを受け取ります
- Validation is customizable

```javascript
var schema = new Schema({
  name: {
    type: String,
    required: true
  }
});
var Cat = db.model('Cat', schema);

// This cat has no name :(
var cat = new Cat();
cat.save(function(error) {
  assert.equal(error.errors['name'].message,
    'Path `name` is required.');

  error = cat.validateSync();
  assert.equal(error.errors['name'].message,
    'Path `name` is required.');
});
```
## [Built-in Validators](https://mongoosejs.com/docs/validation.html#built-in-validators)
Mongooseには、いくつかの組み込みバリデーターがあります。
- すべてのSchemaTypeには、必須のバリデーターが組み込まれています。必須バリデーターは、`SchemaTypeのcheckRequired()` 関数を使用して、値が必須バリデーターを満たしているかどうかを判別します。
- 数値には、最小および最大のバリデーターがあります。
- 文字列には、enum、match、minlength、およびmaxlengthバリデーターがあります。

上記の各バリデータリンクは、それらを有効にしてエラーメッセージをカスタマイズする方法に関する詳細情報を提供します。

```javascript
var breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, 'Too few eggs'],
    max: 12
  },
  bacon: {
    type: Number,
    required: [true, 'Why no bacon?']
  },
  drink: {
    type: String,
    enum: ['Coffee', 'Tea'],
    required: function() {
      return this.bacon > 3;
    }
  }
});
var Breakfast = db.model('Breakfast', breakfastSchema);

var badBreakfast = new Breakfast({
  eggs: 2,
  bacon: 0,
  drink: 'Milk'
});
var error = badBreakfast.validateSync();
assert.equal(error.errors['eggs'].message,
  'Too few eggs');
assert.ok(!error.errors['bacon']);
assert.equal(error.errors['drink'].message,
  '`Milk` is not a valid enum value for path `drink`.');

badBreakfast.bacon = 5;
badBreakfast.drink = null;

error = badBreakfast.validateSync();
assert.equal(error.errors['drink'].message, 'Path `drink` is required.');

badBreakfast.bacon = null;
error = badBreakfast.validateSync();
assert.equal(error.errors['bacon'].message, 'Why no bacon?');
```