import pytz
import time
from datetime import datetime, UTC

dhaka = pytz.timezone("Asia/Dhaka")
utc = datetime.now(UTC)

print(utc.astimezone(dhaka))
print(utc)

print()

print(pytz.all_timezones)


start = datetime.now()
time.sleep(5) #will hold code execution for 5 seconds
end = datetime.now()

print(end-start)