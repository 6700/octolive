# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170420135831) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "collaborations", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "repository_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["repository_id"], name: "index_collaborations_on_repository_id", using: :btree
    t.index ["user_id"], name: "index_collaborations_on_user_id", using: :btree
  end

  create_table "events", force: :cascade do |t|
    t.string   "action_type"
    t.integer  "action_id"
    t.boolean  "read"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["action_type", "action_id"], name: "index_events_on_action_type_and_action_id", using: :btree
    t.index ["user_id"], name: "index_events_on_user_id", using: :btree
  end

  create_table "owners", force: :cascade do |t|
    t.string   "avatar_url"
    t.string   "name"
    t.integer  "type"
    t.string   "uid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["uid"], name: "index_owners_on_uid", using: :btree
  end

  create_table "repositories", force: :cascade do |t|
    t.string   "name"
    t.string   "uid"
    t.integer  "owner_id"
    t.string   "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_repositories_on_owner_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string "email",        default: ""
    t.string "show_name"
    t.string "uid"
    t.string "avatar_url"
    t.string "scopes",       default: [], array: true
    t.string "access_token"
  end

  add_foreign_key "collaborations", "repositories"
  add_foreign_key "collaborations", "users"
  add_foreign_key "events", "users"
  add_foreign_key "repositories", "owners"
end
