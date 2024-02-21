// 非同期でデータを取得する関数をシミュレート
function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        // 仮想的な非同期処理
        setTimeout(() => {
            // 成功または失敗をシミュレート
            const success = Math.random() > 0.5;
            if (success) {
                resolve("データが正常に取得！");
            } else {
                reject("データの取得中にエラーが発生！");
            }
        }, 1000);
    });
}

// 非同期処理を呼び出す例
async function fetchDataAsync() {
    try {
        // 非同期処理を待機する
        const result = await fetchData();
        // データを表示
        console.log(result);
    } catch (error) {
        // エラーを表示
        console.error(error);
    }
}

// fetchDataAsync　関数を呼び出し
fetchDataAsync();

// fetchDataAsync 関数が非同期で実行されるので、この行は非同期処理の完了前に表示される
console.log("非同期処理中〜");
