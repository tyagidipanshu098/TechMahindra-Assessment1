import java.util.Scanner;

class Student {
    private String name;
    private int rollNumber;
    private double marks;


    public Student(String name, int rollNumber, double marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }


    public void displayStudentDetails() {
        System.out.println("\n Student Information-");
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Marks: " + marks);
    }
}

public class StudentInformationSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


        System.out.print("Enter Student Name: ");
        String name = scanner.nextLine();

        System.out.print("Enter Roll Number: ");
        int rollNumber = scanner.nextInt();

        System.out.print("Enter Marks: ");
        double marks = scanner.nextDouble();

   
        Student student = new Student(name, rollNumber, marks);


        student.displayStudentDetails();

        scanner.close();
    }
}
