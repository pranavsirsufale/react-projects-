# Generated by Django 5.1.4 on 2025-01-07 03:13

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("loginapp", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="member",
            name="joined_date",
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name="member",
            name="phone",
            field=models.IntegerField(null=True),
        ),
    ]
