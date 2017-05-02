NODE EMAIL SENDER

1. Make sure NODE is VERSION 6 otherwise nodemailer will not be able to open a connection to the smtp server.

2. run npm install

3. run npm setup to create a copy of the sample-env file you can edit with your settings.

4. Fill in the created .env file with your:
	- email username and password
	- email subjectline
	- path to html file (will need images to have absolute paths)
	- internal emails from the brief (comma separated)
	- client emails from the brief (comma separated)
	- your Litmus test email to send intially
	- the retest email from Litmus

5. run npm start

6. enter the list you wish to send to into the command line prompt
	- test = Litmus intial test
	- retest = Litmus retest
	- internal list
	- client list

7. Off goes the email :)