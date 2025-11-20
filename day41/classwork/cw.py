# 1)შექმენით სია ---> [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5] ამ სიის ბოლოში დაამატე სიტყვა --> "ianvari" და დაპრინტე საბოლოო სია ნახე დაემატა თუ არა

my_list = [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5]


my_list.append("ianvari")


print(my_list)


# 2)შექმენი სია ---> [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5] ამ სიაში მეორე ინდექსზე დაამატე სიტყვა ---> "bati" და დაპრინტე საბოლოო სია ნახე დაემატა თუ არა


list2 = [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5] 


list2.insert(2, "bati")


print(list2)




# 3)შექმენი სია ---->  [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5] ამ სიიდან ამოშალე მე 5 ინდექსზე მდგომი ელემენტი და დაპრინტე საბოლოო სია ნახე ამოიშალა თუ არა


list3 = [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5]

list3.pop(5)

print(list3)



# 4)შექმენი სია --->  [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5] ამ სიიდან ამოშალე True და ასევე ამოშალე "kote" და დაპრინტე საბოლოო სია და ნახე ამოიშალა თუ არა


list4 = [980 , "saba", 231 , "kote" , "cico" , True , "gio" , 40.5]

list4.remove(True)
list4.remove("kote")

print(list4)






