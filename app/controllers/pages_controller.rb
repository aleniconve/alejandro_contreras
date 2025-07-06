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

    return head :unprocessable_entity if name.blank? || email.blank? || message.blank?
    return head :unprocessable_entity unless email.match?(URI::MailTo::EMAIL_REGEXP)

    ContactMailer.contact_email(name, email, message).deliver_now

    render turbo_stream: turbo_stream.replace("contact_form", partial: "contact_form")
  end

end
