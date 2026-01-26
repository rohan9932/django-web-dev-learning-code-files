fruit = input("Enter fruit name: ").lower()

match fruit:
    case "apple":
        print("Apple")
    case "banana":
        print("Banana")
    case _:
        print("No match")