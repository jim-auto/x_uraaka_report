const muted = "#b8a49c";
const grid = "rgba(58,44,48,0.7)";
Chart.defaults.color = muted;
Chart.defaults.borderColor = grid;
Chart.defaults.font.family = "'IBM Plex Sans JP', 'Noto Sans JP', sans-serif";

new Chart(document.getElementById("chartLatest"), {
  type: "bar",
  data: {
    labels: [
      "県名付き量産垢",
      "薄い裏垢女子名乗り",
      "業者を嘆く人間",
      "実在っぽい相互圏の文"
    ],
    datasets: [{
      label: "Latest 先頭付近の見え方",
      data: [78, 12, 8, 2],
      backgroundColor: ["#8a3b46", "#c45c6a", "#d4a574", "#7dba8e"]
    }]
  },
  options: {
    indexAxis: "y",
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "2026-08-19「裏垢女子」「オフパコ」Latest の表層",
        color: "#eadfd9"
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        ticks: { callback: (v) => v + "%" }
      }
    }
  }
});

new Chart(document.getElementById("chartUsers"), {
  type: "bar",
  data: {
    labels: [
      "販売・ハブ 3万+",
      "図鑑・クラブ",
      "日記型 1千〜5千",
      "量産垢 300〜2千",
      "需要側 数十以下"
    ],
    datasets: [{
      label: "ユーザー検索で見えた層のフォロワー帯",
      data: [156774, 31495, 5414, 1243, 48],
      backgroundColor: ["#d4a574", "#e8c4a8", "#7dba8e", "#8a3b46", "#7d6b66"]
    }]
  },
  options: {
    indexAxis: "y",
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "各層の代表垢フォロワー（2026-08-19）",
        color: "#eadfd9"
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: { callback: (v) => v >= 10000 ? (v / 10000) + "万" : v }
      }
    }
  }
});

new Chart(document.getElementById("chartSurface"), {
  type: "doughnut",
  data: {
    labels: [
      "アフィ・業者・量産アカ",
      "閲覧専・オナ専",
      "露出・承認欲求",
      "実在の出会い志向",
      "個撮・販売"
    ],
    datasets: [{
      data: [48, 22, 14, 9, 7],
      backgroundColor: ["#8a3b46", "#c45c6a", "#d4a574", "#e8c4a8", "#7d6b66"],
      borderWidth: 0
    }]
  },
  options: {
    plugins: {
      legend: { position: "bottom" },
      title: {
        display: true,
        text: "検索で見える表層の構成（公開言説からの推定イメージ）",
        color: "#eadfd9"
      }
    },
    cutout: "58%"
  }
});

new Chart(document.getElementById("chartMotives"), {
  type: "bar",
  data: {
    labels: ["閲覧・性癖タイムライン", "承認・いいね", "オフ会・関係", "金銭化", "情報収集"],
    datasets: [
      {
        label: "供給側（投稿する側）",
        data: [62, 71, 38, 29, 44],
        backgroundColor: "#c45c6a"
      },
      {
        label: "需要側（追う側）",
        data: [84, 33, 47, 18, 51],
        backgroundColor: "#d4a574"
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { callback: (v) => v + "%" },
        title: { display: true, text: "相対的な強さ（合成スコア）" }
      }
    },
    plugins: {
      title: {
        display: true,
        text: "動機の重心は「会う」より「見る・見られる」",
        color: "#eadfd9"
      }
    }
  }
});

new Chart(document.getElementById("chartDm"), {
  type: "bar",
  data: {
    labels: ["業者・勧誘リンク", "無返信", "援助交際・有料", "先払い詐欺", "無償の出会い成立"],
    datasets: [{
      label: "68件のDM実験（らぶたっくる, 2023）",
      data: [54, 16, 6, 3, 0],
      backgroundColor: ["#8a3b46", "#7d6b66", "#d4a574", "#e06b6b", "#7dba8e"]
    }]
  },
  options: {
    indexAxis: "y",
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "「オフパコ募集」へDMしたときの内訳（逸話的データ）",
        color: "#eadfd9"
      }
    },
    scales: {
      x: { beginAtZero: true, title: { display: true, text: "件数" } }
    }
  }
});

new Chart(document.getElementById("chartPolicy"), {
  type: "line",
  data: {
    labels: ["2022", "2023", "2024.6", "2025", "2026"],
    datasets: [
      {
        label: "アダルト投稿の公式許容度",
        data: [35, 40, 75, 72, 70],
        borderColor: "#e8c4a8",
        backgroundColor: "rgba(232,196,168,0.15)",
        fill: true,
        tension: 0.3
      },
      {
        label: "検索・おすすめでの露出",
        data: [70, 62, 55, 42, 38],
        borderColor: "#c45c6a",
        backgroundColor: "rgba(196,92,106,0.12)",
        fill: true,
        tension: 0.3
      }
    ]
  },
  options: {
    scales: {
      y: { min: 0, max: 100, ticks: { callback: (v) => v } }
    },
    plugins: {
      title: {
        display: true,
        text: "投稿は認められやすく、拡散は絞られやすい",
        color: "#eadfd9"
      }
    }
  }
});
