class User < ApplicationRecord
  has_many :collaborations, dependent: :destroy_all
  has_many :repositories, through: :collaborations
  has_many :issues, through: :repositories
  has_many :events, dependent: :destroy_all

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

  def can_request?
    remaining_rate > 0 || next_rate_reset < Time.zone.now
  end

  def last_repository_update
    last_update
  end
end
