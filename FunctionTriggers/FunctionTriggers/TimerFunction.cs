using System;
using Microsoft.Azure.Documents.Client;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;

namespace FunctionTriggers
{
    public static class TimerFunction
    {
        [FunctionName("TimerFunction")]
        public static void Run([TimerTrigger("0 0 15 * * THU")]TimerInfo myTimer,
            [CosmosDB("TalkingBook", "Xroads", ConnectionStringSetting = "CosmosDBConnection")] DocumentClient client,
            ILogger log)
        {
            log.LogInformation($"C# Timer trigger function executed at: {DateTime.Now}");
            var option = new FeedOptions { EnableCrossPartitionQuery = true };
            var collectionUri = UriFactory.CreateDocumentCollectionUri("TalkingBook", "Xroads");

            //var document = client.CreateDocumentQuery<NurseryAssignmentDocument>(collectionUri, option)
            //    .Where(p => p.Id == "Nursery").SelectMany(a => a.Weeks).Where(w => w.Sunday >= DateTime.Today.AddDays(-1) && w.Sunday <= DateTime.Today.AddDays(6)).ToList();
            var accountSid = Environment.GetEnvironmentVariable("AccountSid");
            var authToken = Environment.GetEnvironmentVariable("AuthToken");
            var fromPhone = Environment.GetEnvironmentVariable("FromPhone");
            var storageKey = Environment.GetEnvironmentVariable("StorageConnection");
            var apiKey = System.Environment.GetEnvironmentVariable("ApiKey");
            var fromEmailAddress = "heidicmalbums@comcast.net";
            var fromEmailName = "Heidi";
            var ccEmailAddress = System.Environment.GetEnvironmentVariable("CopyEmailAddress");
            var ccEmailName = System.Environment.GetEnvironmentVariable("CopyEmailName");

            //var repository = new SmsRepository(accountSid, authToken, fromPhone);
            //IPersonRepository personRepository = new PersonRepository(storageKey);
            //IEmailRepository emailRepository = new EmailRepository(apiKey);

            //var worker = new MessageBuilderWorker(repository, emailRepository, personRepository);
            //var currentWeek = document[0];

            //worker.PrepareNurseryNotification(currentWeek, fromEmailAddress, fromEmailName, null, null);

        }
    }
}
