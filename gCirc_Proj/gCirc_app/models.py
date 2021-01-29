from django.db import models

class GameUser(models.Model): 
    user_name = models.CharField(max_length=256) 

    def __str__(self): 
        return self.user_name 

    

class GameName(models.Model): 
    game_name = models.CharField(max_length=256)
    high_score = models.IntegerField()
    game_user = models.ManyToManyField(GameUser)

    def __str__(self): 
        return self.game_name
    





    