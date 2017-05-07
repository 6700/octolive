require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module RailsTemplate
  class Application < Rails::Application
    config.generators do |g|
      g.stylesheets false
      g.helper false
      g.javascripts false
      g.assets false
      g.template_engine false
      g.test_framework false
    end
    
    Octokit.middleware = Faraday::RackBuilder.new do |builder|
      builder.use Faraday::HttpCache, serializer: Marshal, shared_cache: false
      builder.use Octokit::Response::RaiseError
      builder.adapter Faraday.default_adapter
    end
  end
end
