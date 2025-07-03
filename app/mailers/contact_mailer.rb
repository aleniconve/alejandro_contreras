class ContactMailer < ApplicationMailer
  default to: 'contrerasx@gmail.com' # your email address here

  def contact_email(name, email, message)
    @name = name
    @message = message
    @sender_email = email

    mail(from: email, subject: "New Contact Message from #{@name}")
  end
end
