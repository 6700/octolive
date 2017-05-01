class User < ApplicationRecord
  has_many :collaborations
  has_many :repositories, through: :collaborations

  def self.create_from_omniauth(_provider, info)
    create_from_omniauth_github info
  end

  def self.create_from_omniauth_github(data)
    info = data[:info]
    find_or_initialize_by(uid: info[:id]).tap do |t|
      t.update(
        show_name: info[:login],
        email: info[:email],
        avatar_url: info[:avatar_url],
        scopes: data[:scopes],
        access_token: data[:access_token]
      )
    end
  end

  def local_token
    access_token
  end
end
