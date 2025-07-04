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
      flash.now[:alert] = "Please fill in all fields."
      return render turbo_stream: turbo_stream.replace("flash_messages", partial: "shared/flash")
    end

    unless email.match?(URI::MailTo::EMAIL_REGEXP)
      flash.now[:alert] = "Please enter a valid email address."
      return render turbo_stream: turbo_stream.replace("flash_messages", partial: "shared/flash")
    end

    ContactMailer.contact_email(name, email, message).deliver_now

    respond_to do |format|
      format.js   # render contact_submit.js.erb
    end
  end

end
