#!/usr/local/bin/ruby

require "cgi"

print "Content-Type: text/plain\n"
# ���s�݂̂Ńw�b�_�̏I��
print "\n"

c = CGI.new
text = c["foo"]

# �ϐ�
user = "hanako"
age = 16
blood = "o"

# �p�����[�^���o��
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
## �p�����[�^���i�[����ׂ̘A�z�z��
#request_param = Hash.new
#
## POST���\�b�h�ł��邩���ׂ�
#if ENV['REQUEST_METHOD'] == "POST" then
#    
#    i = open("C:/Users/Koji/Dropbox/kanban/content2.dat","a")
#    i.write("bbbbb")
#
#    
#
#	# �W�����͂���p�����[�^���擾����
#	query = STDIN.read(ENV['CONTENT_LENGTH'].to_i)
#
#	# "&" �ŋ�؂�
#	for q in query.split("&") do
#		# "=" �ŋ�؂�
#		k, v  = q.split("=",2)
#
#		# URL �f�R�[�h���s���A�z�z��Ɋi�[
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

