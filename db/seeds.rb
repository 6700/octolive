30.times do |i|
  Event.create(
    message: "Holaaa",
    bookmarked: [true, false].sample,
    repo_name: "6700/octolive",
    user: User.all.sample
  )
end