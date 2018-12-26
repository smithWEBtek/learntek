namespace :db do
  desc 'heroku pg:reset, migrate, seed'
  task hdcms: :environment do
    exec('heroku pg:reset --app learntek --confirm learntek
      heroku run rake db:migrate --app learntek
      heroku run rake db:seed --app learntek')	
  end
end