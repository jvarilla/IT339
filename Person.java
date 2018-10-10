public class Person {
	private String _name;
	private char _gender;
	private int _age;

	public Person(String theName, char theGender, int theAge) {
		_name = theName;
		_gender = theGender;
		_age = theAge;
	}

	public String getName() {
		return _name;
	}

	public void setName(String theName) {
		_name = theName;
	}

	public char getGender() {
		return _gender;
	}

	public void setGender(char theGender) {
		_gender = theGender;
	}

	public int getAge() {
		return _age;
	}

	public void setAge(int theAge) {
		_age = theAge;
	}

	public void haveBirthday() {
		_age++;
	}

	@Override
	public String toString() {
		return String.format("%s %c %d", _name, _gender, _age);
	}

}

