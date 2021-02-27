export default function emoji_random() {
  let emojis = [
    "🐞",
    "🐛",
    "🐌",
    "🐜",
    "🦗",
    "🐝",
    "🌿",
    "🌾",
    "🍀",
    "🍁",
    "🍂",
    "🍃",
    "🍄",
    "🍉",
    "🍎",
    "🍑",
    "🍅",
    "🥦",
  ];

  let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  return randomEmoji;
}