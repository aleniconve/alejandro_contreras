class PagesController < ApplicationController
  def home
  end

  def about
  end

  def contact
  end

  def media
  end

  def contact_submit
    name = params[:name]
    email = params[:email]
    message = params[:message]

    if name.blank? || email.blank? || message.blank?
      flash[:alert] = "Please fill in all fields."
      redirect_to contact_path and return
    end

    unless email.match?(URI::MailTo::EMAIL_REGEXP)
      flash[:alert] = "Please enter a valid email address."
      redirect_to contact_path and return
    end

    ContactMailer.contact_email(name, email, message).deliver_now

    flash[:notice] = "Thank you for your message! I will get back to you soon."
    redirect_to contact_path
  end
end
