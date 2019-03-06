# This simply returns a reservation ID to the front end to
# 1) confirm success and 2) help highlight the new reservation

json.extract! @reservation, :id
