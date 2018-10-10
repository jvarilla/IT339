public class TestPerson {
	public static void main (String[] args) {
		System.out.println("Hi there");
		String name = args[0];
		char gender = args[1].charAt(0);
		int age = Integer.parseInt(args[2]);
		Person x = new Person (name, gender, age);
		System.out.println(x);
		x.haveBirthday();
		System.out.println(x);
	}
}

