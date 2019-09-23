from bake import Bakefile

bakefile = Bakefile.find()
bakefile.cache.clear()
# bakefile.cache["test"] = 1
# print(bakefile.cache["test"])
