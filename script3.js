function handleQuizClick(year, number, classNum) {
    const yearFolder = year.replace("/", "-");        // e.g. "2023/24" → "2023-24"
    const classFolder = `class-${classNum}`;          // e.g. 10 → "class-10"
    const url = `${classFolder}/${yearFolder}/quiz-${number}.html`;
    window.location.href = url;
}
  