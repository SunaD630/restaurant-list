# 開発メモ
## Reactで.envを使うとき
環境変数の先頭に```REACT_APP_```をつけて、```process.env.~~~```で呼び出す
## <option>タグのvalueについて
valueは送信される値、タグで囲ったものは表示される文字列
## CORSについて
クロスオリジンHTTPリクエスト...ドメイン、ポート、プロトコルが異なるwebサーバーに送るリクエスト

- シンプルなリクエスト
- シンプルでないリクエスト
の二つに分けられる。

### シンプルなリクエストとは
- method = get, head, post(originヘッダー含める必要)
- ペイロードコンテンツタイプが text/plain、multipart/form-data、または application/x-www-form-urlencoded
- headerが
- Accept
- Accept-Language
- Content-Language
- Content-Type (please note the additional requirements below)
- Range 

シンプルならCORSサポートは無効のままでいい

## can't reslove 'fs' エラーについて
不要なimportを消したら治った

## react hook
useEffect ... 最初にレンダーされるときに呼び出される。それ以外では第二引数に指定したstateの時に呼び出される([]を入れれば最初だけになる。)

## export
exportすると他のファイルで呼び出せる。import * as ~ from "---"
