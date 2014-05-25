#!/usr/local/bin/ruby

require "cgi"

print "Content-Type: text/plain\n"
# 改行のみでヘッダの終了
print "\n"

c = CGI.new
text = c["foo"]

# 変数
user = "hanako"
age = 16
blood = "o"

# パラメータを出力
print "user=" + user
#print "user=" + text
print "&"
print "age=" + age.to_s
print "&"
print "blood=" + blood



#h = open("C:/Users/Koji/Dropbox/kanban/content1.dat","a")
#h.write("aaaaa")
#h.close
#
#
## パラメータを格納する為の連想配列
#request_param = Hash.new
#
## POSTメソッドであるか調べる
#if ENV['REQUEST_METHOD'] == "POST" then
#    
#    i = open("C:/Users/Koji/Dropbox/kanban/content2.dat","a")
#    i.write("bbbbb")
#
#    
#
#	# 標準入力からパラメータを取得する
#	query = STDIN.read(ENV['CONTENT_LENGTH'].to_i)
#
#	# "&" で区切る
#	for q in query.split("&") do
#		# "=" で区切る
#		k, v  = q.split("=",2)
#
#		# URL デコードを行い連想配列に格納
#		request_param[k] = CGI.escape(v);
#		i.write(CGI.escape(v))
#	end
#	i.close
#end
#
#
#f = open("C:/Users/Koji/Dropbox/kanban/content.dat","a")
#f.write(request_param[0])
#f.close

