class ApplicationController < ActionController::Base
  include ApplicationHelper
  before_action :cors_fix

  private

  def paginated(resources)
    {
      data: ActiveModelSerializers::SerializableResource.new(paginated_resources(resources)),
      metadata: {
        current_page: paginated_resources(resources).current_page,
        total_pages: paginated_resources(resources).total_pages,
        total_items: paginated_resources(resources).total_count
      }
    }
  end

  def paginated_resources(resources)
    @paginated_resources ||= resources.page(page).per(50)
  end

  def page
    params.fetch(:page, 1)
  end

  def authenticate_user!
    head :bad_request if current_user.nil?
  end

  def current_user
    @current_user ||= User.find_by(access_token: params[:local_token])
  end

  def cors_fix
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Headers'] =
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  end
end
