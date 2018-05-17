# email-sender-cli
Send emails from the command line using node-mailer

NODE EMAIL SENDER CLI

1.	Make sure NODE is VERSION 6 otherwise nodemailer will not be able to open a connection to the smtp server.

2.	run npm install

3. 	postinstall will run npm setup to create a .env copy of the sample-env file and place a copy of .sample-email-semder-cli-user-config in your home directory.

4. 	Fill in the created .env file with your:
	- email subjectline
	- path to html file (will need images to have absolute paths)
	- from address
	- internal emails from the brief (comma separated)
	- client emails from the brief (comma separated)
	- your Litmus test email to send intially
	- the retest email from Litmus

5. 	Navigate to your home ( ~ ) directory and edit the .email-sender-cli-user-config updating the following:
	- your email address
	- your email password
	- your AWS key & secret (if necessary)

6. 	npm start

7. 	Enter the list you wish to send to into the command line prompt
	- test = Litmus intial test
	- retest = Litmus retest
	- internal list
	- client list
	- other to enter a one off email address

8. 	Off goes the email :)
