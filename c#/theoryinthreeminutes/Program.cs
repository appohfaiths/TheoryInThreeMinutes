using Algorithms;
using System;

class Program
{
    static void Main()
    {
        Console.Write("Enter the base of the triangle: ");
        double baseValue = Convert.ToDouble(Console.ReadLine());

        Console.Write("Enter the height of the triangle: ");
        double height = Convert.ToDouble(Console.ReadLine());

        double area = Algorithms_Class.CalculateAreaOfTriangle(baseValue, height);

        Console.WriteLine($"The area of the triangle is {area}");
    }
}