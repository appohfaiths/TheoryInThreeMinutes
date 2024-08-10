students = []

for i in range(3):
    name = input(f"Enter the name of student { i + 1} :")
    marks = float(input(f"Enter the marks of student { i + 1} :"))

    students.append({
        'name': name,
        'marks': marks
    })

students.sort(key=lambda x: x['marks'], reverse=True)

print("Sorted list of students in descending order of marks:")
for student in students:
    print(f"{student['name']}: {student['marks']}")