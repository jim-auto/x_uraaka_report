const muted = "#b8a49c";
const grid = "rgba(58,44,48,0.7)";
Chart.defaults.color = muted;
Chart.defaults.borderColor = grid;
Chart.defaults.font.family = "'IBM Plex Sans JP', 'Noto Sans JP', sans-serif";

function el(id) {
  return document.getElementById(id);
}

if (el("chartSplit")) {
  new Chart(el("chartSplit"), {
    type: "bar",
    data: {
      labels: ["15万 販売", "6万 自撮り", "3.7万 DMM", "5千 日記", "3千 テキスト", "1.2千 量産"],
      datasets: [{
        data: [75364, 40842, 4773, 7164, 737, 6],
        backgroundColor: ["#d4a574", "#e8c4a8", "#c45c6a", "#7dba8e", "#7d6b66", "#8a3b46"]
      }]
    },
    options: {
      indexAxis: "y",
      plugins: {
        legend: { display: false },
        title: { display: true, text: "典型ポストの表示数", color: "#eadfd9" }
      },
      scales: {
        x: { beginAtZero: true, ticks: { callback: (v) => v >= 10000 ? (v / 10000) + "万" : v } }
      }
    }
  });
}

if (el("chartSell50")) {
  new Chart(el("chartSell50"), {
    type: "doughnut",
    data: {
      labels: ["流出・ボット 17", "ノウハウ 8", "ファン拡散 7", "閲覧 6", "自前 5", "他 7"],
      datasets: [{
        data: [17, 8, 7, 6, 5, 7],
        backgroundColor: ["#8a3b46", "#d4a574", "#7d6b66", "#e8c4a8", "#7dba8e", "#3a2c30"],
        borderWidth: 0
      }]
    },
    options: {
      plugins: {
        legend: { position: "bottom" },
        title: { display: true, text: "販売 50", color: "#eadfd9" }
      },
      cutout: "52%"
    }
  });
}

if (el("chartMeet50")) {
  new Chart(el("chartMeet50"), {
    type: "doughnut",
    data: {
      labels: ["量産 15", "需要側 11", "LINE 9", "非工場 7", "ノイズ 5", "他 3"],
      datasets: [{
        data: [15, 11, 9, 7, 5, 3],
        backgroundColor: ["#8a3b46", "#d4a574", "#c45c6a", "#7dba8e", "#7d6b66", "#3a2c30"],
        borderWidth: 0
      }]
    },
    options: {
      plugins: {
        legend: { position: "bottom" },
        title: { display: true, text: "出会い 50", color: "#eadfd9" }
      },
      cutout: "52%"
    }
  });
}

if (el("chartComm")) {
  new Chart(el("chartComm"), {
    type: "bar",
    data: {
      labels: ["アプリアフィ", "奢り量産", "同一文見せ合い", "少数垢連打", "需要側"],
      datasets: [{
        data: [11, 10, 6, 11, 4],
        backgroundColor: ["#8a3b46", "#c45c6a", "#d4a574", "#e8c4a8", "#7dba8e"]
      }]
    },
    options: {
      indexAxis: "y",
      plugins: {
        legend: { display: false },
        title: { display: true, text: "コミュ Top", color: "#eadfd9" }
      },
      scales: { x: { beginAtZero: true } }
    }
  });
}

if (el("chartExitSell")) {
  new Chart(el("chartExitSell"), {
    type: "doughnut",
    data: {
      labels: ["myfans直 9", "X内 10", "流出DM 8", "Fantia 7", "閲覧 6", "自前 5", "pont 3", "他 2"],
      datasets: [{
        data: [9, 10, 8, 7, 6, 5, 3, 2],
        backgroundColor: ["#8a3b46", "#7d6b66", "#c45c6a", "#d4a574", "#e8c4a8", "#7dba8e", "#3a2c30", "#24191c"],
        borderWidth: 0
      }]
    },
    options: {
      plugins: {
        legend: { position: "bottom" },
        title: { display: true, text: "販売の飛び先", color: "#eadfd9" }
      },
      cutout: "50%"
    }
  });
}

if (el("chartExitMeet")) {
  new Chart(el("chartExitMeet"), {
    type: "doughnut",
    data: {
      labels: ["DM 26", "LINE 9", "ノイズ 5", "非工場 7", "note 2", "PayPay 1"],
      datasets: [{
        data: [26, 9, 5, 7, 2, 1],
        backgroundColor: ["#8a3b46", "#c45c6a", "#7d6b66", "#7dba8e", "#d4a574", "#e8c4a8"],
        borderWidth: 0
      }]
    },
    options: {
      plugins: {
        legend: { position: "bottom" },
        title: { display: true, text: "出会いの飛び先", color: "#eadfd9" }
      },
      cutout: "50%"
    }
  });
}
