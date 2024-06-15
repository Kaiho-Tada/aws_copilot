# ベースイメージを指定
FROM ruby:3.2.2

# 必要なパッケージのインストール
RUN apt-get update && apt-get install -y \
    nodejs \
    yarn \
    && rm -rf /var/lib/apt/lists/*

# 作業ディレクトリの設定
WORKDIR /myapp

# GemfileとGemfile.lockをコピーして依存関係をインストール
COPY Gemfile Gemfile.lock /myapp/
RUN gem install bundler
RUN bundle install --without test development

# アプリケーションのファイルをコピー
COPY . /myapp

# entrypoint.shのコピーと実行権限の付与
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

# エントリーポイントの設定
ENTRYPOINT ["entrypoint.sh"]

# ポートのエクスポート
EXPOSE 3000

# Railsサーバーの起動コマンド
# CMD ["rails", "server", "-b", "0.0.0.0"]
# CMD ["/bin/sh", "-c", "bundle exec rails db:create && bundle exec rails db:migrate && bundle exec unicorn -p 3000 -c config/unicorn.rb -E production"]
# CMD ["/bin/sh", "-c", "bundle exec rails db:create && bundle exec rails db:migrate && bundle exec unicorn -p 3000 -c /myapp/config/unicorn.rb -E production"]
# CMD ["/bin/sh", "-c", "bundle exec rails db:create && bundle exec rails db:migrate && bundle exec rails db:seed && rm -f tmp/pids/server.pid && bundle exec rails s -p 3000 -e production"]
CMD ["/bin/sh", "-c", "rm -f tmp/pids/server.pid && bundle exec rails s -p 3000 -e production"]
# CMD ["/bin/sh", "-c", "rm -f tmp/pids/server.pid && bundle exec rails s -p 3000 -e development"]
# CMD ["/bin/sh", "-c", "rm -f tmp/pids/server.pid && bundle exec rails s"]
