using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using SendGrid.Helpers.Mail;

namespace FunctionTriggers
{
    public static class SendGridFunction
    {
        [FunctionName("SendGridFunction")]
        [return: SendGrid(ApiKey = "ApiKey", To = "lvanlowe@comcast.net", From = "van@nuttin-but.net")]
        public static SendGridMessage Run([QueueTrigger("sendgridqueue", Connection = "StorageConnection")]string myQueueItem, ILogger log)
        {
            log.LogInformation($"C# Queue trigger function Sends email");

            SendGridMessage message = new SendGridMessage()
            {
                Subject = $"Thanks for coming to code camp!"
            };

            message.AddContent("text/plain", $"message from code camp, {myQueueItem}!");
            return message;
        }
    }
}
