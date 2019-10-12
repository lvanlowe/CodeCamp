using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using Twilio;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;

namespace FunctionTriggers
{
    public static class TwilioFunction
    {
        [FunctionName("TwilioFunction")]
        [return: TwilioSms(AccountSidSetting = "AccountSid", AuthTokenSetting = "AuthToken", From = "+17038107908")]
        public static CreateMessageOptions Run([QueueTrigger("twilloqueue", Connection = "StorageConnection")]string myQueueItem, ILogger log)
        {
            log.LogInformation($"C# Queue trigger function processed sms message");

            var message = new CreateMessageOptions(new PhoneNumber(Environment.GetEnvironmentVariable("ToPhone")))
            {
                Body = $"Hello {myQueueItem} NYC Code Camp, thanks for coming!"
            };

            return message;
        }
    }
}
