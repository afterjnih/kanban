#!/usr/local/bin/ruby

require "cgi"

print "Content-Type: text/html\n\n"
print "<html><head></head><body>"

c = CGI.new
text1 = c["a"]
text2 = c["b"]
text3 = c["c"]
text4 = c["d"]


f = open("C:/Users/Koji/Dropbox/kanban/content.dat","a")
f.write(text1)
f.close

print text1
print text2
print text3
print text4


print "<br>"

print "</body></html>"