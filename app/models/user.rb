class User < ApplicationRecord
  def self.create_from_omniauth provider, info
    # if provider == :github
      create_from_omniauth_github info
    # end
  end

  def self.create_from_omniauth_github data
    info = data[:info]
    find_or_initialize_by(uid: info[:id]).update(
      show_name: info[:login],
      email: info[:email],
      avatar_url: info[:avatar_url],
      scopes: data[:scopes],
      access_token: data[:access_token]
    )
  end

end
