class SendmailsController < ApplicationController
  def contact_us
    name = params[:name]
    email = params[:email]
    phone = params[:phone]
    company = params[:company]
    messages = params[:messages]

    if params[:email].present? && params[:messages].present?
      # UserMailer.contact_us(name, email, phone, company, messages, 'contact_us').deliver
      UserMailer.delay.contact_us(name, email, phone, company, messages, 'contact_us')
      render :status=> 200, :json => { :message => "Sent email to you "}
    else
      render :status=> 401, :json => { :message => "Not sent"}
    end
  end

  def show
    
  end
end