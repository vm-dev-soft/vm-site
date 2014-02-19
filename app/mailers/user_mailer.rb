class UserMailer < ActionMailer::Base
  # default from: "from@example.com"

  def contact_us(name, email, phone, company, messages, template)
  	@name = name
  	@email = email
  	@phone = phone
  	@company = company
  	@messages = messages

		mail(:from => @email ,:to => "vm.contact.soft@gmail.com", :subject => "[Client] Email from #{@name}", :template_name => template)  	
  end
end
