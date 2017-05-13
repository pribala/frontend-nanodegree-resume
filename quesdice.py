import json
import random

from flask import Flask
app = Flask(__name__)

import json
import random

@app.route('/')
def hello_world():
    return 'Hello World!'
	
'''def diceRoll():
    num = int(input('How many rolls do you want to simulate? '))

    rolls = {}
    for k in range(2, 13):
        rolls[k] = 0

    doubles = 0

    for k in range(num):
        first = random.randint(1, 6)
        second = random.randint(1, 6)
        if first == second:
                doubles+=1
        rolls[first+second]+=1

    for k in rolls:
        #print('%d - %d %f%%' %(k, rolls[k], float(rolls[k])/float(num)*100))
        #return_info += [k, rolls[k]]
    #return json.dumps(return_info)		

    #print('Doubles - %d - %f%%' %(doubles, float(doubles)/float(num)))'''

if __name__ == '__main__':
    app.debug = True
    app.run()