class Student {
  constructor(id, name, grades, attendance) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.attendance = attendance;
  }

  getAverage() {
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
  }

  getGrade() {
    const avg = this.getAverage();
    if (avg >= 90) return "A";
    if (avg >= 80) return "B";
    if (avg >= 70) return "C";
    if (avg >= 60) return "D";
    if (avg >= 50) return "E";
    return "F";
  }

  getFinalResult() {
    return this.getAverage() >= 50 && this.attendance >= 75 ? "ناجح" : "يحتاج مراجعة";
  }
}

const studentsList = [
  new Student(101, "عمر عبد الحميد", [44, 46, 42], 85),
  new Student(102, "احمد السيد", [88, 92, 85], 90),
  new Student(103, "سارة محمد", [48, 45, 49], 80),
  new Student(104, "خالد علي", [25, 30, 20], 60),
];

console.log("=== تقرير جميع الطلاب ===");
studentsList.forEach(s => {
  console.log(`- ${s.name} | متوسط: ${s.getAverage().toFixed(2)} | تقدير: ${s.getGrade()} | حالة: ${s.getFinalResult()}`);
});

const strugglingStudents = studentsList.filter(s => {
  const avg = s.getAverage();
  return avg >= 40 && avg <= 49;
});

console.log("\n=== الطلاب المتعثرون (40-49) ===");
console.log(strugglingStudents.map(s => `${s.name} - ${s.getAverage().toFixed(2)}`));

const afterRafaa = strugglingStudents.map(s => ({
  name: s.name,
  oldAverage: s.getAverage(),
  newAverage: s.getAverage() + 5
}));

console.log("\n=== بعد اضافة 5 درجات رأفة ===");
console.table(afterRafaa);

const sumNew = afterRafaa.reduce((acc, curr) => acc + curr.newAverage, 0);
const avgAfterRafaa = afterRafaa.length === 0 ? 0 : sumNew / afterRafaa.length;

console.log(`\nمتوسط درجات المتعثرين بعد الرأفة: ${avgAfterRafaa.toFixed(2)}`);
