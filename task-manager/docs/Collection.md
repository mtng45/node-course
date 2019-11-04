# [Collection](https://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html)
`new Collection()`  
新しいコレクションインスタンスを作成します（内部タイプ、直接インスタンス化しないでください）

## Method
### [insertOne](https://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#insertOne)  
`insertOneWriteOpCallback(error, result)`  
単一のドキュメントをMongoDBに挿入します。渡されたドキュメントに_idフィールドが含まれていない場合、 ドライバによって不足している各ドキュメントに1つずつ追加され、ドキュメントが変更されます。この動作 forceServerObjectIdフラグを設定することでオーバーライドできます。

- `ops`: `Array.<object>` :   
  insertOne / insertMany / replaceOneを使用して挿入されたすべてのドキュメント。 insertOne / insertManyのforceServerObjectId == falseの場合、ドキュメントには_idフィールドが含まれます

### [insertMany](https://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#insertMany)  
`insertMany(docs, options, callback){Promise}`  
ドキュメントの配列をMongoDBに挿入します。渡されたドキュメントに_idフィールドが含まれていない場合、 ドライバによって不足している各ドキュメントに1つずつ追加され、ドキュメントが変更されます。この動作 forceServerObjectIdフラグを設定することでオーバーライドできます。

### [find](https://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#find)
`find(query, options)` ⇨ { [Cursor](https://mongodb.github.io/node-mongodb-native/3.3/api/Cursor.html) }  
MongoDBの結果を反復処理するために使用できるクエリのカーソルを作成します[]

### [findOne](https://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#findOne)
`findOne(query, options, callback)`  
クエリに一致する最初のドキュメントを取得します

### [updateOne](https://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#updateOne)
`updateOne(filter, update, options, callback)`  
コレクション内の単一のドキュメントを更新する

**Returns:**  
Promise if no callback passed

### [updateMany](https://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#updateMany)
`updateMany(filter, update, options, callback)`  
Update multiple documents in a collection

**Returns:**  
Promise if no callback passed

