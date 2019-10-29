## link
- [mongodb.com/download-center/community](https://www.mongodb.com/download-center/community)
- [Robo 3T](https://robomongo.org/)
- [Welcome to the MongoDB Docs](https://docs.mongodb.com/)  
  - [MongoDB Node.JS Driver](https://mongodb.github.io/node-mongodb-native/)  
    - [Node.js MongoDB Driver API](https://mongodb.github.io/node-mongodb-native/3.3/api/)

## [Node.js MongoDB Driver API](https://mongodb.github.io/node-mongodb-native/3.3/api/)

### [MongoClient](https://mongodb.github.io/node-mongodb-native/3.3/api/MongoClient.html)  
`new MongoClient(url, options, callback)`  
新しいMongoClientインスタンスを作成します

- `useNewUrlParser`: **boolean**  
  新しいURLパーサーを使用するかどうかを決定します。コアドライバーに同梱されている新しい仕様準拠のURLパーサーを有効にします。このURLパーサーは、元のパーサーのいくつかの問題を修正し、近い将来にそのパーサーを完全に置き換えることを目的としています。デフォルトはtrueで、レガシーURLパーサーを使用するには明示的にfalseに設定する必要があります。  
- `useUnifiedTopology`: **boolean**  
  新しい統合トポロジレイヤーを有効にします
  
### [insertOne](https://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#insertOne)  
`insertOneWriteOpCallback(error, result)`  
単一のドキュメントをMongoDBに挿入します。渡されたドキュメントに_idフィールドが含まれていない場合、 ドライバによって不足している各ドキュメントに1つずつ追加され、ドキュメントが変更されます。この動作 forceServerObjectIdフラグを設定することでオーバーライドできます。

- `ops`: `Array.<object>` :   
  insertOne / insertMany / replaceOneを使用して挿入されたすべてのドキュメント。 insertOne / insertManyのforceServerObjectId == falseの場合、ドキュメントには_idフィールドが含まれます

### [insertMany](https://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#insertMany)  
`insertMany(docs, options, callback){Promise}`  
ドキュメントの配列をMongoDBに挿入します。渡されたドキュメントに_idフィールドが含まれていない場合、 ドライバによって不足している各ドキュメントに1つずつ追加され、ドキュメントが変更されます。この動作 forceServerObjectIdフラグを設定することでオーバーライドできます。

### [ObjectID](https://mongodb.github.io/node-mongodb-native/3.3/api/ObjectID.html)

#### [getTimestamp()](https://mongodb.github.io/node-mongodb-native/3.3/api/ObjectID.html#getTimestamp)
このIDが生成された生成日付（秒まで正確）を返します。

**Returns** :
generation date

#### [toHexString](https://mongodb.github.io/node-mongodb-native/3.3/api/ObjectID.html#toHexString)
ObjectID idを24バイトの16進文字列表現として返します

**Returns** :
24バイトの16進文字列表現

## [mongoDB: Documents](https://docs.mongodb.com/)
### [ObjectId](https://docs.mongodb.com/manual/reference/method/ObjectId/)
新しいObjectId値を返します。 12バイトのObjectId値は次のもので構成されます。
- Unixエポックからの秒数を表す4バイトの値¥
- 5バイトのランダム値、および
- ランダムな値で始まる3バイトのカウンター




