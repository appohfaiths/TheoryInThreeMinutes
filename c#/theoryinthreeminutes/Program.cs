using Algorithms;
using DataStructures;

class Program
{
    static void Main()
    {
        List<Student> students = [];

        for (int i = 0; i < 3; i++)
        {
            Console.WriteLine($"Enter the name of student {i + 1}");
            string? name = Console.ReadLine();

            if(string.IsNullOrEmpty(name))
            {
                Console.WriteLine("Invalid input");
                i--;
                continue;
            }

            Console.WriteLine($"Enter the marks of student {i + 1}");
            string? marksInput = Console.ReadLine();

            if (!double.TryParse(marksInput, out double marks))
            {
                Console.WriteLine("Invalid input");
                i--;
                continue;
            }

            students.Add(new Student { Name = name, Marks = marks });
        }

        students = [.. students.OrderByDescending(s => s.Marks)];

        Console.WriteLine("Sorted list of students in descending order of marks:");
        foreach (var student in students)
        {
            Console.WriteLine($"{student.Name}: {student.Marks}");
        }
    }
}