module UsersHelper
  VALID_ORIGINS = ["octolive.xyz", "www.octolive.xyz", "localhost"].freeze
  def is_an_valid_origin? origin
    Rails.logger.info "El origen es: #{origin}"
    VALID_ORIGINS.include? URI.parse(origin).host
  end
end
