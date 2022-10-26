using System;
using System.Collections.Generic;
using Libplanet.Tx;

namespace Libplanet.Action
{
    /// <summary>
    /// A record type to represent an evaluation plan and result of
    /// a single action.
    /// </summary>
    public class ActionEvaluation
    {
        /// <summary>
        /// Creates an <see cref="ActionEvaluation"/> instance
        /// with filling properties.
        /// </summary>
        /// <param name="action">An action to evaluate.</param>
        /// <param name="inputContext">An input <see cref="IActionContext"/> to
        /// evaluate <paramref name="action"/>.</param>
        /// <param name="outputStates">The result states that
        /// <paramref name="action"/> makes.</param>
        /// <param name="eventLogs">asdasdasdasd.</param>
        /// <param name="exception">An exception that has risen during evaluating a given
        /// <paramref name="action"/>.</param>
        public ActionEvaluation(
            IAction action,
            IActionContext inputContext,
            IAccountStateDelta outputStates,
            Exception? exception = null,
            IReadOnlyList<EventLog>? eventLogs = null)
        {
            Action = action;
            InputContext = inputContext;
            OutputStates = outputStates;
            EventLogs = eventLogs ?? new List<EventLog>();
            Exception = exception;
        }

        /// <summary>
        /// An action to evaluate.
        /// </summary>
        public IAction Action { get; }

        /// <summary>
        /// An input <see cref="IActionContext"/> to evaluate
        /// <see cref="Action"/>.
        /// </summary>
        /// <remarks>Its <see cref="IActionContext.Random"/> property
        /// is not consumed yet.</remarks>
        public IActionContext InputContext { get; }

        /// <summary>
        /// The result states that <see cref="Action"/> makes.
        /// </summary>
        public IAccountStateDelta OutputStates { get; }

        /// <summary>
        /// An exception that had risen during evaluation.
        /// </summary>
        public Exception? Exception { get; }

        public IReadOnlyList<EventLog> EventLogs { get; }
    }
}
