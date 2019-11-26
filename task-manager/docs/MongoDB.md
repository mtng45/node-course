# [MongoDB](https://www.mongodb.com/)
## 71. MongoDB and NoSQL Databases
- SQL(Structured Query Language)
  - Table
    - Row/Record
      - Column
- NoSQL(Not Only SQL)
  - Collection
    - Document
      - Field

## 72. Installing MongoDB on MacOS and Linux
1. [mongodb download](https://www.mongodb.com/download-center/community)
2. create `mongodb` directory and `mongodb-data` directory  
3. command 実行
```
$ cd ~
$ pwd
/Users/foo
$ /Users/foo/mongodb/bin/mongod --dbpath=/Users/foo/mongodb-data
```
実行開始したとき、DBが初期化され、稼働するようになるので、大量に出力する
```
...
2019-11-27T00:54:03.094+0900 I  NETWORK  [initandlisten] Listening on /tmp/mongodb-27017.sock
2019-11-27T00:54:03.094+0900 I  NETWORK  [initandlisten] Listening on 127.0.0.1
2019-11-27T00:54:03.094+0900 I  SHARDING [LogicalSessionCacheReap] Marking collection config.transactions as collection version: <unsharded>
2019-11-27T00:54:03.094+0900 I  NETWORK  [initandlisten] waiting for connections on port 27017
2019-11-27T00:54:04.017+0900 I  FTDC     [ftdc] Unclean full-time diagnostic data capture shutdown detected, found interim file, some metrics may have been lost. OK
```
実行完了後、サーバーは稼働し、接続を待機している
ここでコネクターはDBへの読み書きが可能となる

## 74. Installing Database GUI Viewer
[Robo 3T](https://robomongo.org/)



 

