# Generated by Django 3.1.4 on 2021-01-28 09:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GameUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='GameName',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('game_name', models.CharField(max_length=256)),
                ('high_score', models.IntegerField()),
                ('game_user', models.ManyToManyField(to='gCirc_app.GameUser')),
            ],
        ),
    ]