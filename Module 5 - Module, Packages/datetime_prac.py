# import datetime

# print(datetime.datetime.now())

from datetime import datetime, date, time, timedelta

# * ----------------- datetime ----------------- #
ekhon = datetime.now()

# print(ekhon.year)
# print(ekhon.month)
# print(ekhon.minute)

# print("\n", ekhon.date())
# print(ekhon.time())

print(ekhon.strftime("%B %d, %Y")) #November 25, 2025


date_str = "28-11-2025 11:34:25 AM"
parsed_date = datetime.strptime(date_str, "%d-%m-%Y %I:%M:%S %p")

print(parsed_date)


# * ----------------- date ----------------- #
# my_birthdate = date(year=2004, month=10, date=11)
my_birthdate = datetime(2004, 10, 11, 12, 50, 47)

print(my_birthdate)

ajke = date.today()

print(ajke)


# * ----------------- timedelta ---------------- #
#timedelta potrays the difference of time
diff = ekhon - my_birthdate
print(diff)

print(ekhon + timedelta(days=7, minutes=50)) #adds 7 days and 50 minutes from today

