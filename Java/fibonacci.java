// Coding interview question: Print the first n Fibonacci numbers

public class fibonacci {
    public static void printFibonacci(int n) {
        int a = 0;
        int b = 1;

        if (n <= 0) {
            System.out.println("[]");
            return;
        }

        System.out.print(a);

        for (int i = 1; i < n; i++) {
            System.out.print(" " + b);
            int next = a + b;
            a = b;
            b = next;
        }

        System.out.println();
    }

    public static void main(String[] args) {
        printFibonacci(8);
        // Output: 0 1 1 2 3 5 8 13

        printFibonacci(1);
        // Output: 0
    }
}
