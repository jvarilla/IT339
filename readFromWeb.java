import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Scanner;

public class readFromWeb {
	public static void main (String[] args) throws 
	MalformedURLException, IOException { 
		Scanner in = new Scanner((new URL(
			"http://google.com")).
			openStream());

		while (in.hasNextLine()) {
			String line = in.nextLine();
			System.out.println(line);
		}

		in.close();
	}
}

